// Angular Core imports
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

// Interfaces
import { IPerson, IPersonResponse } from '@core/interfaces/IPerson';

// Services
import { PersonsService } from '@core/services/persons.service';
import { SortingType } from '@core/types/sorting.type';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  private destroyRef: DestroyRef = inject(DestroyRef);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  persons: IPerson[] = [];
  filteredPersons: IPerson[] = [];
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'phone', 'website'];


  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;

  searchTerm: string = '';
  personsSearchControl: FormControl<string> = new FormControl<string>('', {nonNullable: true});
  private phoneSortOption: SortingType = 'none';
  private firstNameSortOption: SortingType = 'none';

  constructor(private personsService: PersonsService) {
  }

  ngOnInit(): void {
    this.initializeData();
    this.setupSearchSubscription();
  }

  private initializeData(): void {
    this.loading$.next(true);
    this.fetchPersons();
  }

  private setupSearchSubscription(): void {
    this.personsSearchControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((search: string) => {
        this.onSearchChange(search);
      });
  }

  fetchPersons(): void {
    this.personsService.getPersons().subscribe({
      next: (response: IPersonResponse) => {
        this.persons = response.data;
        this.totalItems = response.total;
        this.applyFilters();
      },
      complete: () => {
        this.loading$.next(false);
      }
    });
  }

  applyFilters(): void {
    // TODO We can use Fuzzy for advanced search if needed
    if (this.searchTerm) {
      const term: string = this.searchTerm.toLowerCase();
      this.filteredPersons = this.persons.filter(person =>
        person.firstname.toLowerCase().includes(term) ||
        person.lastname.toLowerCase().includes(term) ||
        person.email.toLowerCase().includes(term)
      );
    } else {
      this.filteredPersons = [...this.persons];
    }
    this.currentPage = 1;
  }

  get paginatedPersons(): IPerson[] {
    const startIndex: number = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex: number = startIndex + this.itemsPerPage;
    return this.filteredPersons.slice(startIndex, endIndex);
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
  }

  onSearchChange(value: string): void {
    this.searchTerm = value;
    this.applyFilters();
  }

  onPhoneSort(): void {
    if (this.phoneSortOption === 'none') {
      this.phoneSortOption = 'asc';
    }
    console.log(this.phoneSortOption);
    if (this.phoneSortOption === 'asc') {
      this.filteredPersons.sort((a: IPerson, b: IPerson) => a.phone.localeCompare(b.phone));
      this.phoneSortOption = 'desc';
    } else if (this.phoneSortOption === 'desc') {
      this.phoneSortOption = 'asc';
      this.filteredPersons.sort((a: IPerson, b: IPerson) => b.phone.localeCompare(a.phone));
    }

  }

  onFirstNameSort(): void {
    if (this.firstNameSortOption === 'none') {
      this.firstNameSortOption = 'asc';
    }
    if (this.firstNameSortOption === 'asc') {
      this.firstNameSortOption = 'desc';
      this.filteredPersons.sort((a: IPerson, b: IPerson) => a.firstname.localeCompare(b.firstname));
    } else if (this.firstNameSortOption === 'desc') {
      this.firstNameSortOption = 'asc';
      this.filteredPersons.sort((a: IPerson, b: IPerson) => b.firstname.localeCompare(a.firstname));
    }

  }
}

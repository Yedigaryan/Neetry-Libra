// Angular Core imports
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// Interfaces
import { Person } from '@core/interfaces/person';

// Services
import { PersonsService } from '@core/services/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  private destroyRef: DestroyRef = inject(DestroyRef);
  persons: Person[] = [];
  filteredPersons: Person[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 10;

  searchTerm: string = '';
  personsSearchControl: FormControl<string> = new FormControl<string>('', {nonNullable: true});

  constructor(private personsService: PersonsService) {
  }

  ngOnInit(): void {
    this.fetchPersons();
    this.personsSearchControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((search: string) => {
      this.onSearchChange(search);
    })
  }

  fetchPersons(): void {
    this.personsService.getPersons().subscribe(response => {
      this.persons = response.data;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    // TODO We can use Fuzzy for advanced search if needed
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
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

  get paginatedPersons(): Person[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredPersons.slice(startIndex, endIndex);
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
  }

  onSearchChange(value: string): void {
    this.searchTerm = value;
    this.applyFilters();
  }
}

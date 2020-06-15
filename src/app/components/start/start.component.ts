import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search/search.service';
import { Movie } from 'src/app/models/Movie';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  searchList: Movie[] = [];

  constructor(private fb: FormBuilder,
              private searchService: MovieDataService
  ) { }

  ngOnInit(): void {
  }



}

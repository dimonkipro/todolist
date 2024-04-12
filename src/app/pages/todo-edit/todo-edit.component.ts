import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import axios from 'axios';
import { startWith } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  // recuperer l id envoye dans l url
  idTodo = '';
  todos = {
    content: String,
    date: Date,
  };
  constructor(route: ActivatedRoute, private router: Router) {
    this.idTodo = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getTodosById();
  }

  getTodosById() {
    axios
      .get('http://127.0.0.1:3000/todos/' + this.idTodo + '/get')
      .then((res) => {
        console.log(res.data.todos);
        this.todos = res.data.todos;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  EditTodos(editForm: NgForm) {
    const data = editForm.value;
    axios
      .post('http://127.0.0.1:3000/todos/' + this.idTodo + '/modifier', data)
      .then((res) => {
        console.log(res);
        // alert
        Swal.fire({
          title: 'Success',
          text: 'Todo modifiee avec succee',
          icon: 'success',
          timer: 2000,
        });
        // redirection vers la page home
        this.router.navigate(['todos/list']);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: 'Erreur !!',
          text: 'Probleme de modification',
          icon: 'error',
          timer: 2000,
        });
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';

interface Todo {
  _id: any;
  content: string;
  date: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getTodosList(); // appel de fonction
  }

  // definition de la fonction
  getTodosList() {
    axios
      .get('http://127.0.0.1:3000/todos/list')
      .then((res) => {
        console.log(res.data.listTodos);
        this.todos = res.data.listTodos;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  DeleteTodo(id: any) {
    if (confirm('voulez vous vraiment supprimer ?')) {
      axios
        .get('http://127.0.0.1:3000/todos/' + id + '/supprimer')
        .then((res) => {
          Swal.fire({
            title: 'Succes',
            text: 'Todo supprimee avec succees',
            icon: 'success',
            confirmButtonText: 'Cool',
            timer: 2000,
          });
          this.router.navigate(['todos/list']);
        })
        .catch((err) => {
          Swal.fire({
            title: 'Error!',
            text: 'Probleme de suppression',
            icon: 'error',
            confirmButtonText: 'Cool',
            timer: 2000,
          });
        });
    }
  }
}

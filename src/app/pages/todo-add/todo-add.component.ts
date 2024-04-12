import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  AddTodos(addForm: NgForm) {
    const data = addForm.value;
    axios
      .post('http://127.0.0.1:3000/todos/ajouter', data)
      .then((res) => {
        console.log(res);
        // alert
        Swal.fire({
          title: 'Success',
          text: 'Todo created',
          icon: 'success',
          timer: 2000,
        });
        addForm.reset();
        this.router.navigate(['todos/list']);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: 'Erreur !!',
          text: "Probleme d'ajout",
          icon: 'error',
          timer: 2000,
        });
      });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: any[] = [
    {
      name: 'Yogesh',
      age: 24,
      email: 'yogesh@example.com',
      course: 'Computer Science'
    },
    {
      name: 'Rudraksha',
      age: 23,
      email: 'rudraksha@example.com',
      course: 'Mechanical Engineering'
    }
  ];

  student: any = { name: '', age: '', email: '', course: '' };

  registerStudent() {
    if (this.student.name && this.student.age && this.student.email && this.student.course) {
      this.students.push({ ...this.student });
      this.resetForm();
    }
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

 
  resetForm() {
    this.student = { name: '', age: '', email: '', course: '' };
  }
}

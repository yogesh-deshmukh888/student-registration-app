import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: any[] = [
    { name: 'Rudraksha', age: 25, email: 'rudraksha@gmail.com', course: 'BE', grade: '85' },
    { name: 'Yogesh', age: 24, email: 'yogesh@gmail.com', course: 'MCA', grade: '55' },
    { name: 'Pratik', age: 23, email: 'pratik@gmail.com', course: 'CA', grade: '30' }
  ];

  student: any = { name: '', age: '', email: '', course: '', grade: '' };

  registerStudent() {
    if (this.student.name && this.student.age && this.student.email && this.student.course && this.student.grade) {
      this.students.push({ ...this.student });
      this.resetForm();
    }
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  resetForm() {
    this.student = { name: '', age: '', email: '', course: '', grade: '' };
  }

  getGradeColor(grade: string): string {
    const gradeValue = parseInt(grade, 10);
    if (gradeValue >= 0 && gradeValue <= 39) {
      return 'red-bg'; 
    } else if (gradeValue >= 40 && gradeValue <= 60) {
      return 'yellow-bg'; 
    } else if (gradeValue >= 61 && gradeValue <= 80) {
      return 'blue-bg'; // Background color blue
    } else if (gradeValue >= 81 && gradeValue <= 100) {
      return 'green-bg';
    } else {
      return 'transparent-bg'; 
    }
  }
}
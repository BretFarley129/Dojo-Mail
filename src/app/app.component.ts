import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  info = [
    {email: 'dude@place.com', important: true, subject: "Where's my car?", content: 'Duuuuuuuuuuude'}
    {email: 'me@home.com', important: false, subject: "Sleep", content: "It's important man"}
    {email: 'me@home.com', important: true, subject: "Sleep", content: "It's important man"}
    {email: 'me@home.com', important: true, subject: "Sleep", content: "It's important man"}
    {email: 'me@home.com', important: true, subject: "Sleep", content: "It's important man"}
    {email: 'me@home.com', important: true, subject: "Sleep", content: "It's important man"}
    {email: 'me@home.com', important: false, subject: "Sleep", content: "It's important man"}
    {email: 'me@home.com', important: false, subject: "Sleep", content: "It's important man"}
    {email: 'me@home.com', important: false, subject: "Sleep", content: "It's important man"}
  ]
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'hello',
    template: `<p style="text-align: center; margin-top: 75px; font-size: 30px;">Demonstrating {{name}}!</p>`,
    styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
    @Input()
    name: string = "";
}

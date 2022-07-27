import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthName',
})
export class MonthNamePipe implements PipeTransform {
  month = '';
  transform(value: any, args?: any): any {
    switch (value) {
      case 1:
        this.month = 'January';
        break;
      case 2:
        this.month = 'February';
        break;
      case 3:
        this.month = 'March';
        break;
      case 4:
        this.month = 'April';
        break;
      case 5:
        this.month = 'May';
        break;
      case 6:
        this.month = 'June';
        break;
      case 7:
        this.month = 'July';
        break;
      case 8:
        this.month = 'August';
        break;
      case 9:
        this.month = 'September';
        break;
      case 10:
        this.month = 'October';
        break;
      case 11:
        this.month = 'November';
        break;
      case 12:
        this.month = 'December';
        break;
    }
    return this.month;
  }
}

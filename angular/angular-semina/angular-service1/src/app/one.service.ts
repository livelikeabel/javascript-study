import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneService {
  name = '나는 서비스 입니다.';

  constructor() { }
}

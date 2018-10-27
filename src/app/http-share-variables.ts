import { HttpClient, HttpHeaders } from '@angular/common/http';

export const httpOption = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
};


export const webApiAddress = {
    completeness: 'https://localhost:5001'
};


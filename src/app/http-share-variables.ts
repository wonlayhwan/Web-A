import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOption = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
};


const webApiAddress = {
    completeness: 'https://localhost:5001'
};


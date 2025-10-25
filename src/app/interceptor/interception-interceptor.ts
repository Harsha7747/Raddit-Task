import { HttpInterceptorFn } from '@angular/common/http';

export const interceptionInterceptor: HttpInterceptorFn = (req, next) => {
  // const tocken=localStorage.getItem('token');

  const tocken='eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJsb2lkIiwiZXhwIjoxNzYxNDc4NTgzLjcxODI2MiwiaWF0IjoxNzYxMzkyMTgzLjcxODI2MiwianRpIjoiazJIR1RLdHJWd09SbGpkdHpvZXdlNHRDLVNkWDJnIiwiY2lkIjoiWkVSaERUazFjenZYUW9mQ1Q5b0pDQSIsImxpZCI6InQyXzIwbDIyd244eHUiLCJsY2EiOjE3NjEzOTIxODM3MDIsInNjcCI6ImVKeUtWdEpTaWdVRUFBRF9fd056QVNjIiwiZmxvIjo2fQ.mc_aNwSjxm9qAqFW--OgGBO975jjo6d3LQ3T4q2Tk00e-H_vX6ZnjR5UYRilqEVwpnLfCYwcR850D-jfzuAgIvVU3O74aJe-ZkkUznUB0aveJholn4nasGVwkJSF28ON-U22Z60RuMQw37hAK2zZqofVHTP8gEdwobBqFa9bhWIgTMm2jkmfJ056HO0bObt1QqCBlUXkumRjADzl6lAYyljsFmP8VjBLijDn3v17tKBxzlh3vBi_zepiugiwfmIP7YmT6XOJ2t-I74JlBZWfIX1zpEj5a9H6hRkDOrUwG4NaTFrK6w92SK2YGOuNado3A14uHKlHBIqaRoQL_ozH5w';
  if(tocken){
    const newreq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${tocken}`,

      }
    })
    return next(newreq);
  }
  return next(req);
};

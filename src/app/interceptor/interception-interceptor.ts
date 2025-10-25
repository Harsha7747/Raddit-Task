import { HttpInterceptorFn } from '@angular/common/http';

export const interceptionInterceptor: HttpInterceptorFn = (req, next) => {
  // const tocken=localStorage.getItem('token');
  const tocken='eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJsb2lkIiwiZXhwIjoxNzYxMTEwODk2LjU4NDE4NiwiaWF0IjoxNzYxMDI0NDk2LjU4NDE4NiwianRpIjoiczVFcThrTHNjbkphX3B6RWZ0Y0VQbTQ3bHZpbDR3IiwiY2lkIjoiZE52RW53aTlpakY5bVF5TF9OX1ZCQSIsImxpZCI6InQyXzIwYWs4Znp4ZzAiLCJsY2EiOjE3NjEwMjQ0OTY1NjgsInNjcCI6ImVKeUtWdEpTaWdVRUFBRF9fd056QVNjIiwiZmxvIjo2fQ.Kbo_M1B3Qz1aDiHmOY4hK0gi_HdmQLS1ClvI8ZeWskEjIC05S5lgDgLHbAiU-DVaLniuTYNnJIyFBBm5yJMO90T3FmW8xDHqjcespQ5hmIzbwMpdHxooBTxW6HjmAapvoEFlaZmNXSroCZgVxihJwid0x-FzV64Wp25vt_COR_k40tSLoTKfpGbdkHN0zcQ2G-4qMubJUCfvwToQr-THMGjBx7Eo4IumNTwiO2pEIMU8_7B5mmWD9CaAjMeu7heOgEe8BOBYcq2CLjq-BEwzyH9YreX_1JtqAtSgRLZ0f8gV-Rk3FtYDDeZAZau-gqq3Yngi4SWORlilglii9gXrnA';
  if(tocken){
    const newreq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${tocken}`,

      }
    })
    return next(req);
  }
  return next(req);
};

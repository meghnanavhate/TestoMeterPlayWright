API(APPLICATION PROGRAMMING INTERFACE)
-->it is a medium that allows two application to communicate with each other

API TESTING
-->It checks whether the API is working correctly by sending requests and verifying the response

HTTP Methods
->GET : retrive(read)data
->POST : create new data
->PUT : update existing data
->DELETE : delete data
->PATCH : update only specific fields of a resource

Status code - it tells whetherr the request was successful or not
-->1xx - Informational

-->2xx - success
200 ok -request successful
201 created - resource created successfully
204 no content - request successful, but no data is returned

-->3xx - redirection
301 moved permanently
302 found
304 not modified

-->4xx - client error
400 bad request
401 unauthorized
403 forbidden
404 not found
409 conflict
422 unprocessable
429 too many request

-->5xx - server error
500 internal error
502 bad gatway
503 service unavailble
504 gatway timeout
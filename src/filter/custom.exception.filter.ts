import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const http = host.switchToHttp()
    const response = http.getResponse()

    response.json(exception)
  }
}
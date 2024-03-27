import { Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';


@Controller('test') //  Nest will map GET /test requests to this handler. "test" - Optional controller path prefix
export class TestController {
    @Post() // combined with the decorator @Get('user'), path specified in the method's decorator, would produce a route mapping for requests like GET /test/user
    sendResponse(@Res() res: Response): any { // We obviously must declare a method to bind the route to, but Nest doesn't attach any significance to the method name chosen.
        const responseData = {
            approach: "express"
        };
        res.status(200).send(responseData);
    }
}

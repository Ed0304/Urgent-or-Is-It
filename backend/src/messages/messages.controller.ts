import {
    Controller,
    Get,
    Param,
    ParseIntPipe,
} from "@nestjs/common";

import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {

    constructor(
        private readonly messagesService: MessagesService,
    ) {}

    @Get(":chapter/:level")
    getLevelMessages(
        @Param("chapter", ParseIntPipe) chapter: number,
        @Param("level", ParseIntPipe) level: number,
    ) {
        return this.messagesService.getLevelMessages(
            chapter,
            level,
        );
    }
}
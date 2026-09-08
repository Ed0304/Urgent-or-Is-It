import {
    CanActivate,
    ExecutionContext,
    Injectable,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtGuard implements CanActivate {

    constructor(
        private readonly jwtService: JwtService
    ) {}

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {

        const request =
            context.switchToHttp().getRequest();

        const authHeader =
            request.headers.authorization;

        console.log("Authorization header:", authHeader);

        if (!authHeader) {
            console.log("No Authorization header");
            return false;
        }

        const [type, token] =
            authHeader.split(" ");

        console.log("Auth type:", type);
        console.log("Token exists:", !!token);

        if (type !== "Bearer" || !token) {
            console.log("Invalid Bearer token format");
            return false;
        }

        try {

            const payload =
                await this.jwtService.verifyAsync(token);

            console.log("JWT payload:", payload);

            request.user = payload;

            return true;

        } catch (error) {

            console.error(
                "JWT verification failed:",
                error
            );

            return false;
        }
    }
}
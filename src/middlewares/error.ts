import { ApiError } from "@/utils/api-errors"
import { Request, Response, NextFunction, ErrorRequestHandler } from "express"

const errorMiddleware: ErrorRequestHandler = (
    err: Error & Partial<ApiError>,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = err.statuscode ?? 500
    const message = err.statuscode ? err.message : 'Internal Server Error'
    res.status(statusCode).json({ message })
}

export default errorMiddleware;
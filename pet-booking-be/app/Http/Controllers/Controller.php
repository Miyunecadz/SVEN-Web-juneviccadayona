<?php

namespace App\Http\Controllers;

/**
 * @OA\PathItem(path="/api")
 */
abstract class Controller
{
    /**
     * Summary of responseSuccess
     * @param mixed $data
     * @param mixed $message
     * @param mixed $code
     * @return mixed|\Illuminate\Http\JsonResponse
     */
    protected function responseSuccess($data = null, $message = 'Success', $code = 200)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    /**
     * Summary of error
     * @param mixed $message
     * @param mixed $code
     * @param mixed $errors
     * @return mixed|\Illuminate\Http\JsonResponse
     */
    protected function error($message = 'Error', $code = 400, $errors = null)
    {
        $response = [
            'success' => false,
            'message' => $message,
        ];

        if ($errors !== null) {
            $response['errors'] = $errors;
        }

        return response()->json($response, $code);
    }
}

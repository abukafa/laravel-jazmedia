<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\admin\EventController;
use App\Http\Controllers\admin\SchoolController;
use App\Http\Controllers\admin\StudentController;
use App\Http\Controllers\admin\TeacherController;
use App\Http\Controllers\media\BookmarkController;
use App\Http\Controllers\media\CommentController;
use App\Http\Controllers\media\LikeController;
use App\Http\Controllers\media\ParticipantController;
use App\Http\Controllers\media\StoryController;
use App\Http\Controllers\project\PlanController;
use App\Http\Controllers\project\TaskController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::apiResource('students', StudentController::class);
Route::apiResource('teachers', TeacherController::class);
Route::apiResource('schools', SchoolController::class);
Route::apiResource('events', EventController::class);
Route::apiResource('plans', PlanController::class);
Route::apiResource('tasks', TaskController::class);

Route::apiResource('participants', ParticipantController::class);
Route::apiResource('bookmarks', BookmarkController::class);
Route::apiResource('likes', LikeController::class);
Route::apiResource('comments', CommentController::class);
Route::apiResource('stories', StoryController::class);
<?php

use App\Http\Controllers\academy\AwardController;
use App\Http\Controllers\academy\CompetenceController;
use App\Http\Controllers\academy\CourseController;
use App\Http\Controllers\academy\ScoreController;
use App\Http\Controllers\academy\SubjectController;
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
use App\Http\Controllers\finance\AccountController;
use App\Http\Controllers\finance\FinanceController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\payment\BillingController;
use App\Http\Controllers\payment\DiscountController;
use App\Http\Controllers\payment\PaymentController;
use App\Http\Controllers\payment\SavingController;
use Illuminate\Http\Request;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('participants', ParticipantController::class);
Route::apiResource('bookmarks', BookmarkController::class);
Route::apiResource('likes', LikeController::class);
Route::apiResource('comments', CommentController::class);
Route::apiResource('stories', StoryController::class);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

Route::apiResource('schools', SchoolController::class);
Route::apiResource('students', StudentController::class);
Route::apiResource('teachers', TeacherController::class);

Route::apiResource('events', EventController::class);
Route::apiResource('plans', PlanController::class);
Route::apiResource('tasks', TaskController::class);

Route::apiResource('courses', CourseController::class)->middleware('auth:sanctum');
Route::apiResource('awards', AwardController::class)->middleware('auth:sanctum');
Route::apiResource('subjects', SubjectController::class)->middleware('auth:sanctum');
Route::apiResource('competences', CompetenceController::class)->middleware('auth:sanctum');
Route::apiResource('scores', ScoreController::class)->middleware('auth:sanctum');

Route::apiResource('accounts', AccountController::class)->middleware('auth:sanctum');
Route::apiResource('finances', FinanceController::class)->middleware('auth:sanctum');
Route::apiResource('billings', BillingController::class)->middleware('auth:sanctum');
Route::apiResource('discounts', DiscountController::class)->middleware('auth:sanctum');
Route::apiResource('payments', PaymentController::class)->middleware('auth:sanctum');
Route::apiResource('savings', SavingController::class)->middleware('auth:sanctum');
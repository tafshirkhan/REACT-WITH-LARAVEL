<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\ClientReviewController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CoursesController;
use App\Http\Controllers\Admin\FotterController;
use App\Http\Controllers\Admin\InformationController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\RecentWorksController;
use App\Http\Controllers\Admin\HomePageExtraController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Chart
Route::get('/chartdata',[ChartController::class,'AllSelect']);
//Client Review
Route::get('/clientreview',[ClientReviewController::class,'AllSelect']);
//Contact Form
Route::post('/postcontact',[ContactController::class,'PostContact']);

//Our Courses
Route::get('/ourcourses',[CoursesController::class,'OurCourses']);
//Our All courses
Route::get('/ourallcourses',[CoursesController::class,'OurAllCourses']);
//Single Course details
Route::get('/singlecoursedetails/{courseId}',[CoursesController::class,'SingleCourseDetails']);

//Footer
Route::get('/footerdata',[FotterController::class,'AllSelect']);
//Information
Route::get('/information',[InformationController::class,'AllSelect']);
//Our services
Route::get('/ourservices',[ServiceController::class,'AllService']);

//Recent Works
Route::get('/recentworks',[RecentWorksController::class,'RecentWorks']);
Route::get('/recentallworks',[RecentWorksController::class,'RecentAllWorks']);
Route::get('/singleworkdetails/{projectID}',[RecentWorksController::class,'RecentWorkDetails']);

//Home Extra
Route::get('/homepage/video',[HomePageExtraController::class,'HomePageVideo']);
Route::get('/homepage/totals',[HomePageExtraController::class,'HomePageTotal']);
Route::get('/homepage/analysis',[HomePageExtraController::class,'HomePageAnalysis']);
Route::get('/homepage/title',[HomePageExtraController::class,'HomePageTitle']);

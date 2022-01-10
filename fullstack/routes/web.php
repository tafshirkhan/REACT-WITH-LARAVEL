<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\Admin\InformationController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\RecentWorksController;
use App\Http\Controllers\Admin\CoursesController;
use App\Http\Controllers\Admin\HomePageExtraController;
use App\Http\Controllers\Admin\ClientReviewController;
use App\Http\Controllers\Admin\FotterController;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\ContactController;





/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('Admin.index');
})->name('dashboard');

//Admin Logout
Route::get('/admin/logout',[AdminUserController::class,'AdminLogout'])->name('admin.logout');

//Admin profile

Route::prefix('admin')->group(function(){
    Route::get('/user/profile',[AdminUserController::class,'UserProfile'])->name('user.profile');
    Route::get('/user.profile.edit',[AdminUserController::class,'UserProfileEdit'])->name('user.profile.edit');
    Route::post('/user/profile/storedata',[AdminUserController::class,'UserProfileStoreData'])->name('user.profile.storedata');
    Route::get('/user/changes/password',[AdminUserController::class,'ChangesPassword'])->name('user.changes.password');
    Route::post('/user/profile/updatepassword',[AdminUserController::class,'UpdatePassword'])->name('user.profile.updatepassword');
});

//Information

Route::prefix('information')->group(function(){
    Route::get('/all/details',[InformationController::class,'AllDetails'])->name('all.details');
    Route::get('/add/details',[InformationController::class,'AddDetails'])->name('add.details');
    Route::post('/store/details',[InformationController::class,'StoreDetails'])->name('store.details');
    Route::get('/edit/details/{id}',[InformationController::class,'EditDetails'])->name('edit.details');
    Route::post('/update/details/{id}',[InformationController::class,'UpdateDetails'])->name('update.details');
    Route::get('/delete/details/{id}',[InformationController::class,'DeleteDetails'])->name('delete.details');

    
});

//Service
Route::prefix('service')->group(function(){
    Route::get('/all/service',[ServiceController::class,'ViewAllService'])->name('all.service');
    Route::get('/add/service',[ServiceController::class,'AddNewService'])->name('add.service');
    Route::post('/service/storedata',[ServiceController::class,'ServiceStore'])->name('service.storedata');
    Route::get('/edit/service/{id}',[ServiceController::class,'EditService'])->name('edit.service');
    //Route::post('/service/updatedata/{id}',[ServiceController::class,'UpdateService'])->name('service.updatedata');
    Route::post('/service/updatedata',[ServiceController::class,'UpdateService'])->name('service.updatedata');
    Route::get('/delete/service/{id}',[ServiceController::class,'DeleteService'])->name('delete.service');  
});

//Recent work
Route::prefix('recent')->group(function(){
    Route::get('/all/work',[RecentWorksController::class,'ViewAllWork'])->name('all.work');
    Route::get('/add/work',[RecentWorksController::class,'AddNewWork'])->name('add.work');
    Route::post('/project/storedata',[RecentWorksController::class,'ProjectStore'])->name('project.storedata');
    Route::get('/edit/work/{id}',[RecentWorksController::class,'EditWork'])->name('edit.work');
    //Route::post('/service/updatedata/{id}',[ServiceController::class,'UpdateService'])->name('service.updatedata');
    Route::post('/project/update',[RecentWorksController::class,'UpdateWork'])->name('project.update');
    Route::get('/delete/work/{id}',[RecentWorksController::class,'DeleteProject'])->name('delete.work');  
});


//Our courses
Route::prefix('ourcourses')->group(function(){
    Route::get('/all/courses',[CoursesController::class,'ViewAllCourses'])->name('all.courses');
    Route::get('/add_new/course',[CoursesController::class,'AddNewCourse'])->name('add_new.course');
    Route::post('/course/storedata',[CoursesController::class,'CourseStore'])->name('course.storedata');
    Route::get('/edit/courses/{id}',[CoursesController::class,'EditCourses'])->name('edit.courses');
    //Route::post('/service/updatedata/{id}',[ServiceController::class,'UpdateService'])->name('service.updatedata');
    Route::post('/course/updatedata',[CoursesController::class,'UpdateCourse'])->name('course.updatedata');
    Route::get('/delete/courses/{id}',[CoursesController::class,'DeleteCourses'])->name('delete.courses');  
});


//Home page
Route::prefix('home')->group(function(){
    Route::get('/all/home_content',[HomePageExtraController::class,'ViewAllContent'])->name('all.home_content');
    Route::get('/add_new/home_content',[HomePageExtraController::class,'AddNewContent'])->name('add_new.home_content');
    Route::post('/homecontent/storedata',[HomePageExtraController::class,'HomeContentStore'])->name('homecontent.storedata');
    Route::get('/edit/home_content/{id}',[HomePageExtraController::class,'EditHomeContent'])->name('edit.home_content');
    //Route::post('/service/updatedata/{id}',[ServiceController::class,'UpdateService'])->name('service.updatedata');
    Route::post('/homecontent/update',[HomePageExtraController::class,'UpdateHomeContent'])->name('homecontent.update');
    Route::get('/delete/home_content/{id}',[HomePageExtraController::class,'DeleteHomeContent'])->name('delete.home_content');  
});

//Client Review
Route::prefix('client')->group(function(){
    Route::get('/all/client_review',[ClientReviewController::class,'ViewAllReview'])->name('all.client_review');
    Route::get('/add_new/client_review',[ClientReviewController::class,'AddNewReview'])->name('add_new.client_review');
    Route::post('/client_review/storedata',[ClientReviewController::class,'ReviewStore'])->name('client_review.storedata');
    Route::get('/edit/review/{id}',[ClientReviewController::class,'EditClientReview'])->name('edit.review');
    //Route::post('/service/updatedata/{id}',[ServiceController::class,'UpdateService'])->name('service.updatedata');
    Route::post('/client_review/update',[ClientReviewController::class,'UpdateReview'])->name('client_review.update');
    Route::get('/delete/review/{id}',[ClientReviewController::class,'DeleteReview'])->name('delete.review');  
});


//Footer
Route::prefix('footer')->group(function(){
    Route::get('/all/footer_data',[FotterController::class,'ViewAllFooterData'])->name('all.footer_data');
    Route::get('/add/new_footer',[FotterController::class,'AddNewFooter'])->name('add.new_footer');
    Route::post('/footer/storedata',[FotterController::class,'FooterStore'])->name('footer.storedata');
    Route::get('/edit/footer/{id}',[FotterController::class,'EditFooter'])->name('edit.footer');
    //Route::post('/service/updatedata/{id}',[ServiceController::class,'UpdateService'])->name('service.updatedata');
    Route::post('/footer/updatadata',[FotterController::class,'UpdateFooter'])->name('footer.updatadata');
    Route::get('/delete/footer/{id}',[FotterController::class,'DeleteFooter'])->name('delete.footer');  
});


//Chart
Route::prefix('chart')->group(function(){
    Route::get('/all/chart_data',[ChartController::class,'ViewAllChartData'])->name('all.chart_data');
    Route::get('/add/new_chart',[ChartController::class,'AddNewChart'])->name('add.new_chart');
    Route::post('/chart/storedata',[ChartController::class,'ChartStore'])->name('chart.storedata');
    Route::get('/edit/chartdata/{id}',[ChartController::class,'EditChartData'])->name('edit.chartdata');
    //Route::post('/service/updatedata/{id}',[ServiceController::class,'UpdateService'])->name('service.updatedata');
    Route::post('/chart/updatedata',[ChartController::class,'UpdateChart'])->name('chart.updatedata');
    Route::get('/delete/chartdata/{id}',[ChartController::class,'DeleteChartData'])->name('delete.chartdata');  
});


//Contact
Route::prefix('chart')->group(function(){
    Route::get('/all/contact_data',[ContactController::class,'ViewAllContactData'])->name('all.contact_data');
    
    Route::get('/delete/contactdata/{id}',[ContactController::class,'DeleteContactData'])->name('delete.contactdata');  
});
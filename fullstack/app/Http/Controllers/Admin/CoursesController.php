<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Courses;
use Image;

class CoursesController extends Controller
{
    public function OurCourses(){
        $ourcourses = Courses::limit(4)->get();
        return $ourcourses;

    }

    public function OurAllCourses(){
        $ourallcourses = Courses::all();
        return $ourallcourses;

    }

    public function SingleCourseDetails($courseId){
        $Id = $courseId;
        $result = Courses::where('id',$Id)->get();
        return $result;
    }

    public function ViewAllCourses(){
        $data = Courses::all();

        return view('Backend.OurCourses.all_courses',compact('data'));
    }

    public function AddNewCourse(){

        return view('Backend.OurCourses.addnew_courses');
    }

    public function CourseStore(Request $req){
         $req->validate([
            'course_title'=>'required',
            'course_description'=>'required',
            'course_image'=>'required',
            'course_view_title'=>'required',
            'course_view_description'=>'required',
            'total_duration'=>'required',
            'total_lecture'=>'required',
            'total_students'=>'required',
            'all_skill'=>'required',
            'video_url'=>'required',
        ],[
            'course_title'=>'Title is required',
            'course_description'=>'Description is required'
        ]);

        $image = $req->file('course_image');
        $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
        Image::make($image)->resize(626,391)->save('upload/courses/'.$name_gen);
        $save_URL = 'http://127.0.0.1:8000/upload/courses/'.$name_gen;
        Courses::insert([
            'course_title'=>$req->course_title,
            'course_description'=>$req->course_description,
            'course_image'=>$save_URL,
            'course_view_title'=>$req->course_view_title,
            'course_view_description'=>$req->course_view_description,
            'total_duration'=>$req->total_duration,
            'total_lecture'=>$req->total_lecture,
            'total_students'=>$req->total_students,
            'all_skill'=>$req->all_skill,
            'video_url'=>$req->video_url,
        ]);

        $alert = array(
            'message'=>"Inserted successgul",
            'alert-type'=>'success'
        );
        return Redirect()->route('all.courses')->with($alert);

    }

    public function EditCourses($id){
        $data = Courses::findOrFail($id);

        return view('Backend.OurCourses.edit_courses',compact('data'));
    }

    public function UpdateCourse(Request $req){
         $courseId = $req->id;

        if($req->file('course_image')){
            $image = $req->file('course_image');
            $name_gen = hexdec(uniqid()).'.'.$image->getClientOriginalExtension();
            Image::make($image)->resize(626,391)->save('upload/courses/'.$name_gen);
            $save_URL = 'http://127.0.0.1:8000/upload/courses/'.$name_gen;
           
            Courses::findOrFail($courseId)->update([
            'course_title'=>$req->course_title,
            'course_description'=>$req->course_description,
            'course_image'=>$save_URL,
            'course_view_title'=>$req->course_view_title,
            'course_view_description'=>$req->course_view_description,
            'total_duration'=>$req->total_duration,
            'total_lecture'=>$req->total_lecture,
            'total_students'=>$req->total_students,
            'all_skill'=>$req->all_skill,
            'video_url'=>$req->video_url,
            ]);

             $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'success'
             );
             return Redirect()->route('all.courses')->with($alert);

        }
        else{
            Courses::findOrFail($courseId)->update([
            'course_title'=>$req->course_title,
            'course_description'=>$req->course_description,
            'course_view_title'=>$req->course_view_title,
            'course_view_description'=>$req->course_view_description,
            'total_duration'=>$req->total_duration,
            'total_lecture'=>$req->total_lecture,
            'total_students'=>$req->total_students,
            'all_skill'=>$req->all_skill,
            'video_url'=>$req->video_url,
            
            ]);

             $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'success'
             );
             return Redirect()->route('all.courses')->with($alert);
        }

    }

    public function DeleteCourses($id){
        Courses::findOrFail($id)->delete();

        $alert = array(
            'message'=>"Deleted successful",
            'alert-type'=>'warning'
             );

        return Redirect()->route('all.courses')->with($alert);
    }
}

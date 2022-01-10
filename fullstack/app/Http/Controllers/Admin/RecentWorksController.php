<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RecentWorks;
use Image;

class RecentWorksController extends Controller
{
    public function RecentWorks(){
        $recentwork = RecentWorks::limit(3)->get();
        return $recentwork;
    }

    public function RecentAllWorks(){
        $recentallwork = RecentWorks::all();
        return $recentallwork;
    }

    public function RecentWorkDetails($projectID){
        $workId = $projectID;
        $result = RecentWorks::where('id',$workId)->get();
        return $result;
    }

   public function ViewAllWork(){
       $data = RecentWorks::all();
       return view('Backend.RecentWork.all_work',compact('data'));
   }

   public function AddNewWork(){
       return view('Backend.RecentWork.add_work');
   }

   public function ProjectStore(Request $req){
       $req->validate([
            'project_name'=>'required',
            'project_description'=>'required',
            'first_image'=>'required',
            'second_image'=>'required',
            
        ],[
            'project_name'=>'Name is required',
            'project_description'=>'Description is required'
        ]);

        $image_1 = $req->file('first_image');
        $name_gen = hexdec(uniqid()).'.'.$image_1->getClientOriginalExtension();
        Image::make($image_1)->resize(626,391)->save('upload/project/'.$name_gen);
        $save_URL_1 = 'http://127.0.0.1:8000/upload/project/'.$name_gen;

        $image_2 = $req->file('second_image');
        $name_gen = hexdec(uniqid()).'.'.$image_2->getClientOriginalExtension();
        Image::make($image_2)->resize(350,250)->save('upload/project/'.$name_gen);
        $save_URL_2 = 'http://127.0.0.1:8000/upload/project/'.$name_gen;

        RecentWorks::insert([
            'first_image'=>$save_URL_1,
            'second_image'=>$save_URL_2,
            'project_name'=>$req->project_name,
            'project_description'=>$req->project_description,
            'project_feature'=>$req->project_feature,
            'project_live_preview'=>$req->project_live_preview,
            
            
        ]);

        $alert = array(
            'message'=>"Inserted successgul",
            'alert-type'=>'success'
        );
        return Redirect()->route('all.work')->with($alert);
   }

   public function EditWork($id){
       $data = RecentWorks::findOrFail($id);
       return view('Backend.RecentWork.edit_work',compact('data'));
   }

   public function UpdateWork(Request $req){
       $projectId = $req->id;

       if($req->file('first_image')){

        $image_1 = $req->file('first_image');
        $name_gen = hexdec(uniqid()).'.'.$image_1->getClientOriginalExtension();
        Image::make($image_1)->resize(626,391)->save('upload/project/'.$name_gen);
        $save_URL_1 = 'http://127.0.0.1:8000/upload/project/'.$name_gen;

        $image_2 = $req->file('second_image');
        $name_gen = hexdec(uniqid()).'.'.$image_2->getClientOriginalExtension();
        Image::make($image_2)->resize(350,250)->save('upload/project/'.$name_gen);
        $save_URL_2 = 'http://127.0.0.1:8000/upload/project/'.$name_gen;

        RecentWorks::findOrFail($projectId)->update([
            'first_image'=>$save_URL_1,
            'second_image'=>$save_URL_2,
            'project_name'=>$req->project_name,
            'project_description'=>$req->project_description,
            'project_feature'=>$req->project_feature,
            'project_live_preview'=>$req->project_live_preview,      
        ]);

        $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'success'
        );
        return Redirect()->route('all.work')->with($alert);

       }
       else{
        RecentWorks::findOrFail($projectId)->update([
            'project_name'=>$req->project_name,
            'project_description'=>$req->project_description,
            'project_feature'=>$req->project_feature,
            'project_live_preview'=>$req->project_live_preview,  
        ]);

        $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'info'
        );
        return Redirect()->route('all.work')->with($alert);
       }
   }

   public function DeleteProject($id){
       RecentWorks::findOrFail($id)->delete();

       $alert = array(
           'message'=>'Deleted successful',
           'alert-type'=>'warning',
       );

       return Redirect()->back()->with($alert);
   }
}

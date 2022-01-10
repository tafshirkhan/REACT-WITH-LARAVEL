<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HomePageExtra;

class HomePageExtraController extends Controller
{
    public function HomePageVideo(){
        $homevideo = HomePageExtra::select('video_dexcription','video_url')->get();
        return $homevideo;
    }

    public function HomePageTotal(){
        $hometotal = HomePageExtra::select('total_students','total_course','total_review')->get();
        return $hometotal;
    }

     public function HomePageAnalysis(){
        $homeanalysis = HomePageExtra::select('analysis_description')->get();
        return $homeanalysis;
    }

    public function HomePageTitle(){
        $hometitle = HomePageExtra::select('home_title','home_subtitle')->get();
        return $hometitle;
    }

    public function ViewAllContent(){
        $data = HomePageExtra::all();

        return view('Backend.HomePage.all_content',compact('data'));
    }

    public function AddNewContent(){
        return view('Backend.HomePage.add_content');
    }

   public function HomeContentStore(Request $req){
        $req->validate([
            'home_title'=>'required',
            'home_subtitle'=>'required',
            'analysis_description'=>'required'
        ],[
            'home_title'=>'Title is required',
            'analysis_descriptionn'=>'Description is required'
        ]);

        HomePageExtra::insert([
            'home_title'=>$req->home_title,
            'home_subtitle'=>$req->home_subtitle,
            'analysis_description'=>$req->analysis_description,
            'total_students'=>$req->total_students,
            'total_course'=>$req->total_course,
            'total_review'=>$req->total_review,
            'video_dexcription'=>$req->video_dexcription,
            'video_url'=>$req->video_url,
        ]);

        $alert = array(
            'message'=>"Inserted successful",
            'alert-type'=>'success'
        );
        return Redirect()->route('all.home_content')->with($alert);
   }

   public function EditHomeContent($id){
       $data = HomePageExtra::findOrFail($id);

       return view('Backend.HomePage.edit_content',compact('data'));
   }

   public function UpdateHomeContent(Request $req){
       $id = $req->id;

       HomePageExtra::findOrFail($id)->update([
            'home_title'=>$req->home_title,
            'home_subtitle'=>$req->home_subtitle,
            'analysis_description'=>$req->analysis_description,
            'total_students'=>$req->total_students,
            'total_course'=>$req->total_course,
            'total_review'=>$req->total_review,
            'video_dexcription'=>$req->video_dexcription,
            'video_url'=>$req->video_url,
        ]);

        $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'success'
        );
        return Redirect()->route('all.home_content')->with($alert);
   }

   public function DeleteHomeContent($id){
       HomePageExtra::findOrFail($id)->delete();

       $alert = array(
           'message'=>"Deleted successful",
           'alert-type'=>"warning"
       );

       return Redirect()->route('all.home_content')->with($alert);
   }
}

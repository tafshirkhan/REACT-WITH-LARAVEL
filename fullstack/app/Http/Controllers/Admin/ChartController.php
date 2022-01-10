<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Chart;

class ChartController extends Controller
{
    public function AllSelect(){
     //eloquent ORM
     $allresult = Chart::all();
     return $allresult;
    }

    public function ViewAllChartData(){
        $data = Chart::all();

        return view('Backend.Chart.all_chartdata',compact('data'));
    }

    public function AddNewChart(){
        return view('Backend.Chart.add_chartdata');
    }

    public function ChartStore(Request $req){
        $req->validate([
            'Technology'=>'required',
            'Projects'=>'required',
        ]);

        Chart::insert([
            'Technology'=>$req->Technology,
            'Projects'=>$req->Projects,
        ]);

        $alert = array(
            'message'=>"Inserted successful",
            'alert-type'=>"success",
        );

        return Redirect()->route('all.chart_data')->with($alert);

    }

    public function EditChartData($id){
        $data = Chart::findOrFail($id);

        return view('Backend.Chart.edit_chartdata',compact('data'));
    }
    public function UpdateChart(Request $req){
        $chartId = $req->id;

        Chart::findOrFail($chartId)->update([
            'Technology'=>$req->Technology,
            'Projects'=>$req->Projects,
            
            ]);

            $alert = array(
            'message'=>"Updated successful",
            'alert-type'=>'success'
             );
             return Redirect()->route('all.chart_data')->with($alert);
    }

    public function DeleteChartData($id){
        Chart::findOrFail($id)->delete();

        $alert = array(
            'message'=>"Deleted successful",
            'alert-type'=>'warning'
             );
             return Redirect()->route('all.chart_data')->with($alert);
    }
}

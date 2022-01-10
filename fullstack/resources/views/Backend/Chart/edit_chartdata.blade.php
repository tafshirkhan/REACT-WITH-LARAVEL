@extends('Admin.Admin_Master')
@section('admin')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <div class="content-body" style="min-height: 884px;">
        <div class="container-fluid">
            <!-- Add Project -->
            @php
                $id = Auth::user()->id;
                $user = App\Models\User::find($id);
                
            @endphp
            <div class="row page-titles mx-0">
                <div class="col-sm-6 p-md-0">
                    <div class="welcome-text">
                        <h4>{{ $user->name }} welcome </h4>
                        <span>Owner</span>
                    </div>
                </div>
                <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">

                </div>
            </div>
            <!-- row -->
            <div class="row">
                <div class="col-xl-12 col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Edit Data</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form method="post" action="{{ route('chart.updatedata') }}">
                                    @csrf

                                    <input type="hidden" name="id" value="{{ $data->id }}">
                                    <div class="form-group">
                                        <label class="info-title">Technology</label>
                                        <input type="text" name="Technology" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->Technology }}">
                                        @error('Technology')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Projects</label>
                                        <input type="text" name="Projects" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->Projects }}">
                                        @error('Projects')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <input type="submit" class="btn light btn-success" value="Update">

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

@endsection

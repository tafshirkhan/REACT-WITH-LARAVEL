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
                            <h4 class="card-title">Add New Home Content</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form method="post" action="{{ route('homecontent.storedata') }}">
                                    @csrf
                                    <div class="form-group">
                                        <label class="info-title">Home Title</label>
                                        <input type="text" name="home_title" class="form-control input-default "
                                            placeholder="input-default">
                                        @error('home_title')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Home Sub-Title</label>
                                        <input type="text" name="home_subtitle" class="form-control input-default "
                                            placeholder="input-default">
                                        @error('home_subtitle')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">Analysis Description</label>
                                        <textarea class="form-control" name="analysis_description" rows="4"
                                            id="column"></textarea>
                                        @error('analysis_description')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">Students</label>
                                        <input type="text" name="total_students" class="form-control input-default "
                                            placeholder="input-default">
                                        @error('total_students')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Total Course</label>
                                        <input type="text" name="total_course" class="form-control input-default "
                                            placeholder="input-default">
                                        @error('total_course')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">Total Reviews</label>
                                        <input type="text" name="total_review" class="form-control input-default "
                                            placeholder="input-default">
                                        @error('total_review')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Video Description</label>
                                        <textarea class="form-control" name="video_dexcription" rows="4"
                                            id="column"></textarea>
                                        @error('video_dexcription')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Video URL</label>
                                        <input type="text" name="video_url" class="form-control input-default "
                                            placeholder="input-default">
                                        @error('video_url')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <input type="submit" class="btn light btn-success" value="Add">

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <!-- summernote css/js -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.js"></script>
    <script type="text/javascript">
        $('#summernote').summernote({
            height: 400
        });
    </script>
@endsection

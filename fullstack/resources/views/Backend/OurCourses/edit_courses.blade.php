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
                            <h4 class="card-title">Edit Courses</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form method="post" action="{{ route('course.updatedata') }}"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <input type="hidden" name="id" value="{{ $data->id }}">

                                    <div class="form-group">
                                        <label class="info-title">Course Name</label>
                                        <input type="text" name="course_title" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->course_title }}">
                                        @error('course_title')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">Course Description</label>
                                        <textarea class="form-control" name="course_description" rows="4" id="comment">
                                                            {{ $data->course_description }}
                                                        </textarea>
                                        @error('course_description')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Course View Title</label>
                                        <input type="text" name="course_view_title" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->course_view_title }}">
                                        @error('course_view_title')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">Course View Description</label>
                                        <textarea class="form-control" name="course_view_description" rows="4"
                                            id="comment">
                                                        {{ $data->course_view_description }}</textarea>
                                        @error('course_view_descriptione')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">Total Duration</label>
                                        <input type="text" name="total_duration" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->total_duration }}">
                                        @error('total_duration')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title">Total Lecture</label>
                                        <input type="text" name="total_lecture" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->total_lecture }}>
                                                    @error('total_lecture')
                                                                    <span class="   text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">Total Students</label>
                                        <input type="text" name="total_students" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->total_students }}">
                                        @error('total_students')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">All Skill</label>
                                        <textarea class="form-control" name="all_skill" rows="4" id="comment">
                                                        {{ $data->all_skill }}
                                                    </textarea>
                                        @error('all_skill')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">video URL</label>
                                        <input type="text" name="video_url" class="form-control input-default "
                                            placeholder="input-default" value="{{ $data->video_url }}">
                                        @error('video_url')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Upload</span>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" name="course_image" class="custom-file-input" id="image_one">
                                            <label class="custom-file-label">Image One</label>

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <img id="showImage_one" src="{{ asset($data->course_image) }}"
                                            style="width: 100px; height:100px;">
                                    </div>

                                    <input type="submit" class="btn light btn-success" value="Update Course">

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    {{-- For uploading image --}}

    <script type="text/javascript">
        $(document).ready(function() {
            $('#image_one').change(function(e) {
                var read = new FileReader();
                read.onload = function(e) {
                    $('#showImage_one').attr('src', e.target.result);

                }
                read.readAsDataURL(e.target.files['0']);
            })
        })
    </script>

    {{-- Second Image --}}


@endsection

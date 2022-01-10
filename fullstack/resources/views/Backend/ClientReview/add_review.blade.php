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
                            <h4 class="card-title">Add New Review</h4>
                        </div>
                        <div class="card-body">
                            <div class="basic-form">
                                <form method="post" action="{{ route('client_review.storedata') }}"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <div class="form-group">
                                        <label class="info-title">Client Name</label>
                                        <input type="text" name="client_title" class="form-control input-default "
                                            placeholder="input-default">
                                        @error('client_title')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label class="info-title">Client Review</label>
                                        <textarea class="form-control" name="client_description" rows="4"
                                            id="comment"></textarea>
                                        @error('client_description')
                                            <span class="text-danger">{{ $message }}</span>
                                        @enderror
                                    </div>

                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">Upload</span>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" name="client_image" class="custom-file-input" id="image1">
                                            <label class="custom-file-label">Choose file</label>

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <img id="showImage1" src="{{ url('upload/no_image.jpg') }}"
                                            style="width: 100px; height:100px;">
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


    {{-- For uploading image --}}

    <script type="text/javascript">
        $(document).ready(function() {
            $('#image1').change(function(e) {
                var read = new FileReader();
                read.onload = function(e) {
                    $('#showImage1').attr('src', e.target.result);

                }
                read.readAsDataURL(e.target.files['0']);
            })
        })
    </script>


@endsection

@extends('Admin.Admin_Master')
@section('admin')
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
                        <h4>{{ $user->name }} welcome back!</h4>
                        <p class="mb-0">Admin</p>
                    </div>
                </div>

            </div>
            <!-- row -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Client Review</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-responsive-md">
                                    <thead>
                                        <tr>
                                            <th style="width:80px;"><strong>No</strong></th>
                                            <th><strong>Client Name</strong></th>
                                            <th><strong>Client Review</strong></th>
                                            <th><strong>Client Image</strong></th>
                                            <th><strong>Status</strong></th>
                                            <th><strong>Option</strong></th>

                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($data as $data)
                                            <tr>
                                                <td><strong>{{ $data->id }}</strong></td>
                                                <td>{{ $data->client_title }}</td>
                                                <td>{{ Str::limit($data->client_description, 15, '...') }}</td>
                                                <td><img src="{{ asset($data->client_image) }}"
                                                        style="width: 60px; height:60px;"></td>

                                                <td><span class="badge light badge-success">Successful</span></td>

                                                {{-- <td>
                                                    <div class="dropdown">
                                                        <button type="button" class="btn btn-success light sharp"
                                                            data-toggle="dropdown">
                                                            <svg width="20px" height="20px" viewBox="0 0 24 24"
                                                                version="1.1">
                                                                <g stroke="none" stroke-width="1" fill="none"
                                                                    fill-rule="evenodd">
                                                                    <rect x="0" y="0" width="24" height="24"></rect>
                                                                    <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                                                    <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                                                </g>
                                                            </svg>
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item"
                                                                href="{{ route('edit.details', $data->id) }}">Edit</a>
                                                            <a class="dropdown-item" href="#">Delete</a>
                                                        </div>
                                                    </div>
                                                </td> --}}
                                                <td>
                                                    <div class="d-flex">
                                                        <a href="{{ route('edit.review', $data->id) }}"
                                                            class="btn btn-primary shadow btn-xs sharp mr-1"><i
                                                                class="fa fa-pencil"></i></a>
                                                        <a href="{{ route('delete.review', $data->id) }}"
                                                            class="btn btn-danger shadow btn-xs sharp"><i
                                                                class="fa fa-trash"></i></a>
                                                    </div>
                                                </td>

                                            </tr>

                                        @endforeach

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- <td>
                    <div class="d-flex">
                        <a href="#" class="btn btn-primary shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                        <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                    </div>
                </td> --}}


            </div>
        </div>
    </div>
@endsection

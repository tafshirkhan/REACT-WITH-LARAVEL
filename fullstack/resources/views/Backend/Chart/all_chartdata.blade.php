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
                            <h4 class="card-title">Chart Data</h4>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-responsive-md">
                                    <thead>
                                        <tr>
                                            <th style="width:80px;"><strong>No</strong></th>
                                            <th><strong>Technology</strong></th>
                                            <th><strong>project</strong></th>

                                            <th><strong>Status</strong></th>
                                            <th><strong>Option</strong></th>

                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($data as $data)
                                            <tr>
                                                <td><strong>{{ $data->id }}</strong></td>
                                                <td>{{ $data->Technology }}</td>
                                                <td>{{ $data->Projects }}</td>

                                                <td><span class="badge light badge-success">Successful</span></td>

                                                <td>
                                                    <div class="d-flex">
                                                        <a href="{{ route('edit.chartdata', $data->id) }}"
                                                            class="btn btn-primary shadow btn-xs sharp mr-1"><i
                                                                class="fa fa-pencil"></i></a>
                                                        <a href="{{ route('delete.chartdata', $data->id) }}"
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
            </div>
        </div>
    </div>
@endsection

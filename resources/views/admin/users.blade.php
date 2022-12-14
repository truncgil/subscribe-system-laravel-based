@extends('admin.master')
@section("title",__("Users"))
@section("desc",__("You can manage users in the system from this section."))
@section('content')
<?php
	use Illuminate\Support\Facades\Request;
	use Illuminate\Support\Facades\Input;
	use App\Contents;
	use App\Types;
	use App\Fields;
	use App\User;
	try{
		$seviye = Contents::where("slug","user-level")->first();
		$seviye = strip_tags($seviye->html);
		$seviye = explode(",",$seviye);
	} catch (Exception $e) {
		
	}
	$seviye = "Admin
	Client
	";
	$seviye = explode("\n",$seviye);
	$request = null;
	if(getisset("q")) {
		  $request = Request::all();
		  $q = $request['q'];
			
		  $searchFields = ['name','surname','email','phone','permissions'];
		  $users = User::where(function($query) use($request, $searchFields){
			$searchWildcard = '%' . $request['q'] . '%';
			foreach($searchFields as $field){
			  $query->orWhere($field, 'LIKE', $searchWildcard);
			}
		  })
		  ->where("id",">=",Auth::user()->id)
		  ->simplePaginate(10);

	} else {
		$users = User::orderBy("id","DESC")->where("id",">=",Auth::user()->id);
		if(u()->level!="Admin") {
			$users = $users->where("uid",u()->id);
		}
		$users = $users->simplePaginate(5);
	}
	
	$types = Types::all();
	
?>
<div class="content">
<div class="block">
        <div class="block-header block-header-default">
            <h3 class="block-title">
			
				<form action="" method="get">
					<div class="row">
						<div class="col-md-6">
							<div class="input-group">
								<div class="input-group-prepend">
									<button type="submit" class="btn btn-secondary">
										<i class="fa fa-search"></i>
									</button>
								</div>
								<input type="text" class="form-control"  name="q" value="{{@$request['q']}}" placeholder="{{e2("User name")}}">
							</div>
						</div>
					</div>
				</form>
			
			</h3>
            <div class="block-options">
                <div class="block-options-item">
                    <a href="{{ url('admin-ajax/user-add') }}" class="btn btn-default"><i class="fa fa-plus"></i></a>
                </div>
            </div>
        </div>
		

        <div class="block-content">
			<div class="table-responsive">
				<table class="table table-bordered table-hover table-striped">
					<tr>
						<td>{{e2("ID")}}</td>
						<td>{{e2("Parent")}}</td>
						<td>{{e2("Name")}}</td>
						<td>{{e2("Surname")}}</td>
						<td>{{e2("Level")}}</td>
						<td>{{e2("E-Mail")}}</td>
						<td>{{e2("Phone")}}</td>
						<td>{{e2("Permissions")}}</td>
						<td>{{e2("Recovery Password")}}</td>
						<td>{{e2("Alias")}}</td>
						<td>{{e2("Process")}}</td>
					</tr>
					@foreach($users AS $u)
						@php
							$permissions = explode(",",$u->permissions);
						@endphp
					<tr>
						<td>{{$u->id}}</td>
						<td><input type="text" name="ust" value="{{$u->ust}}" style="min-width:100px" table="users" id="{{$u->id}}" class="name{{$u->id}} form-control edit" /></td>
						<td><input type="text" name="name" value="{{$u->name}}" table="users" id="{{$u->id}}" class="name{{$u->id}} form-control edit" /></td>
						<td><input type="text" name="surname" value="{{$u->surname}}" table="users" id="{{$u->id}}" class="surname{{$u->id}} form-control edit" /></td>
						<td>
							<select name="level" id="{{$u->id}}" table="users" class="form-control edit">
							@if($seviye!=null)
								@foreach($seviye AS $l)
								<?php $l = trim($l); ?>
								<?php 
								if($l=="Admin") { //e??er admin kullan??c??s?? ise admin g??sterimine izin ver.
									if(u()->level=="Admin") {  ?>
									<option value="{{$l}}" @if($u->level==$l) selected @endif>{{e2($l)}}</option>
									<?php } ?>
								<?php } else {
									 ?>
									 <option value="{{$l}}" @if($u->level==$l) selected @endif>{{e2($l)}}</option>
									 <?php 
								} ?>
								@endforeach
							@endif
							</select>
						</td>
						<td><input type="text" name="email" value="{{$u->email}}" table="users" id="{{$u->id}}" class="email{{$u->id}} form-control edit" /></td>
						<td><input type="text" name="phone" value="{{$u->phone}}" table="users" id="{{$u->id}}" class="phone{{$u->id}} form-control edit" /></td>
						<td>
			<?php // print_r( $permissions); ?>
						<form action="{{url('admin-ajax/permission-update')}}" method="post">
							@csrf
							<select name="permissions[]" multiple id="" class="select2" style="width:250px">
							@if($types!=null)
							@foreach($types AS $t)
							<?php 
							$ust = "";
							if($t->kid!="") {
								$ust = slugtotitle($t->kid). " / ";
							} ?>
								<option value="{{$t->title}}" @if(in_array($t->title,$permissions)) selected @endif>{{$ust}}{{$t->title}}</option>
							@endforeach
							@endif
							@foreach(diger_ayarlar() AS $d) 
							
								<option value="{{$d}}" @if(in_array($d,$permissions)) selected @endif>{{$d}}</option>
							@endforeach
							</select>
							<input type="hidden" name="id" value="{{$u->id}}" />
							<button class="btn btn-default" title="{{__('Kullan??c??n??n yetkilerini g??ncelle')}}"><i class="fa fa-sync"></i></button>
						</form>
						</td>
						
						<td>
							<a href="{{url('admin-ajax/password-update?id='.$u->id)}}" title="{{__('Kullan??c??n??n ??ifresini s??f??rla')}}" class="btn btn-default"><i class="fa fa-sync"></i> {{e2("??ifre S??f??rla")}}</button></td>
						<td>
							{{$u->recover}}	
							<input type="text" name="alias" value="{{$u->alias}}" table="users" id="{{$u->id}}" class="alias{{$u->id}} form-control edit" /></td>

						<td>
						<div class="dropdown">
						  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							{{e2("????lemler")}}
						  </button>
						  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="#"><i class="fa fa-lock"></i> {{e2("Giri?? Yap")}}</a>
							<a class="dropdown-item" teyit="{{$u->adi}} {$u->soyadi} {{e2("Kullan??c??s??n?? silmek istedi??inizden emin misiniz?")}}" href="{{url('admin-ajax/user-delete?id='.$u->id)}}">
							<i class="fa fa-times"></i>
							{{e2("Sil")}}</a>
						  </div>
						</div>
						</td>
					</tr>
					@endforeach
				</table>
				{{$users->fragment('users')->links() }}
			</div>
		</div>
@endsection

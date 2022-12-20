<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function create(Request $request)
    {
        $userData = $request->validate([
            'username' => 'required|unique:users|alpha_num|min:4|max:12',
            'password' => 'required'
        ]);

        User::create([
            'username' => $userData['username'],
            'password' => Hash::make($userData['password'])
        ]);

        return response([
            'message' => 'User created successfully.'
        ]);
    }

    public function authenticate(Request $request)
    {
        $userData = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if (Auth::attempt([ 'username' => $userData['username'], 'password' => $userData['password'] ])) {
            $request->session()->regenerate();

            return response([
                'message' => 'User logged in successfully.'
            ]);
        }

        return response([
            'errors' => [
                'username' => ['The username or the password are incorret.']
            ]
        ], 500);
    }
}

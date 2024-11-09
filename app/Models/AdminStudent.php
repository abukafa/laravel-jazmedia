<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminStudent extends Model
{
    use HasFactory;

    protected $fillable = [
        'nis',
        'name',
        'nickname',
        'gender',
        'rumble',
        'birth_place',
        'birth_date',
        'address',
        'hamlet',
        'village',
        'district',
        'city',
        'postal_code',
        'hobby',
        'sport',
        'ambition',
        'role',
        'skills',
        'own_phone',
        'email',
        'instagram',
        'father',
        'father_birth',
        'father_note',
        'mother',
        'mother_birth',
        'mother_note',
        'phone',
        'job',
        'income',
        'image',
        'payment_category',
        'registered',
        'graduation',
        'next_school',
        'next_school_address',
        'note'
    ];
}
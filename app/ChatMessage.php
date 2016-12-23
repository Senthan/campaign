<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChatMessage extends Model
{
    protected $fillable = ['user_id', 'message'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}

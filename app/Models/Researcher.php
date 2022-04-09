<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Researcher extends Model
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "mapeamento";
    protected $primaryKey = "id";
    protected $fillable = [
        "name",
        "state",
        "contact",
        "web",
        "university",
        "role",
        "research_field",
        "keywords"
    ];
    public $timestamps = false;

    // public function user() {
    //     return $this->belongsTo(User::class);
    // }

    public function getSearchResult(): SearchResult
    {
        $url = route('researcher.show', $this->id);

        return new SearchResult(
            $this,
            $this->name,
            $url
         );
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Researcher extends Model implements Searchable
{
    use HasFactory;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = "mapeamento";
    protected $primaryKey = "id";

    // public static function search(string $search) {
    //     $columns = ["id", "name", "state", "contact", "web", "university", "role", "research_field", "keywords"];

    //     // If the search is empty, return everything
    //     if (empty(trim($search))) {
    //         return static::select($columns)->get();
    //     }

    //     // If the search contains something, a fuzzy search is carried out
    //     else {
    //         $fuzzySearch = implode("%", str_split(str_replace(" ", "",$search)));
    //         $fuzzySearch = "%$fuzzysearch%"; // test -> %t%e%s%t%s%

    //         return static::select($columns)->where("name", "LIKE", $fuzzySearch)->get();
    //     }
    // }

    protected $fillable = [
        'name'
    ];

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

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Produto;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ProdutoController extends Controller
{
    private $produto;
    public function __construct(Produto $produto)
    {
        $this->produto = $produto; 
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // $role_id = Auth::user()->role_id;
        $produtos = $this->produto->with('categorias')->get();
        return response()->json(['data'=> $produtos, 'message' => "Produtos retrieved successfully"], 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request ->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'categoria_id' => 'required'
        ]);

        DB::beginTransaction();

        try{
            $produto = new Produto();
            $produto->name = $request->name;
            $produto->description = $request->description;
            $produto->price = $request->price;
            $produto->categoria_id = $request->categoria_id;
            $produto->save();

            $data = [
                'id' => $produto->id,
                'name' => $produto->name,
                'description' => $produto->description,
                'price' => $produto->price,
                'categoria_id' => $produto->categoria_id
            ];

            DB::commit();
            return response()->json(['data'=> $data, 'message' => "Produto adicionado com sucesso"], 200);

        }catch(Exception $e){
            DB::rollBack();
            return response()->json(['message' => $e], 404);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $produto = $this->produto->find($id);
        return response()->json(['data'=> $produto, 'message' => "Produto retrieved successfully"], 200);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $request ->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'categoria_id' => 'required'
        ]);

        

        DB::beginTransaction();

        try{
            // $produto = new Produto();
            $produto = $this->produto->find($id);
            $produto->name = $request->name;
            $produto->description = $request->description;
            $produto->price = $request->price;
            $produto->categoria_id = $request->categoria_id;
            $produto->save();
            // $produto->update();

            $data = [
                'id' => $produto->id,
                'name' => $produto->name,
                'description' => $produto->description,
                'price' => $produto->price,
                'categoria_id' => $produto->categoria_id
            ];

            DB::commit();
            return response()->json(['data'=> $data, 'message' => "Produto actualizado com sucesso"], 200);

        }catch(Exception $e){
            DB::rollBack();
            return response()->json(['message' => $e], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $produto = $this->produto->find($id);

        DB::beginTransaction();
        try {
            if (empty($produto)) {
                return response()->json(["message" => "Produto não encontrado."]);  
            }

            $produto->delete();
            DB::commit();
            return response()->json(["message" => "Produto removido com sucesso."], 200);  
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e], 404);
        }
    }
}

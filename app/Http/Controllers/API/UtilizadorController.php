<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Utilizador;
use App\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UtilizadorController extends Controller
{
    private $utilizador;
    private $user;
    public function __construct(Utilizador $utilizador, User $user)
    {
        $this->utilizador = $utilizador; 
        $this->user = $user; 
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $utilizadores = $this->utilizador->get();

        // return response()->json($utilizadores);
        return response()->json(["data" => $utilizadores, "message" => "Users retrieved successfully"]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'email' => 'required',
            'role_id' => 'required',
        ]);

        $input = $request->only(['name', 'email', 'role_id']);

        DB::beginTransaction();

        try{
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->role_id = $request->role_id;
            $user->password = bcrypt('1234567');
            $user->save();
            $input['user_id'] = $user->id;

            $utilizador = Utilizador::create($input);

            $data = [
                'id' => $utilizador->id,
                'name' => $utilizador->name,
                'role_id' => $utilizador->role_id

            ];

            DB::commit();

            return response()->json(["data" => $data, "message" => "Utilizador criado com sucesso"]);
        }catch(Exception $e){
            DB::rollBack();
            return response()->json($e);
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
        $utilizadores = Utilizador::find($id);
        return response()->json(["data" => $utilizadores, "message" => "Users retrieved successfully"]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $input = $request->only(['name', 'email','role_id']);

        $utilizador = $this->utilizador->find($id);

        if(empty($utilizador)){
            return response()->json(["message" => "Utilizador não encontrado."]);   
        }
        //
        DB::beginTransaction();

        try {
            $utilizador->update($input);

            $user = $this->user->find($utilizador->user_id);

            if (empty($user)) {
                DB::rollback();
                return response()->json(["message" => "Usuário do Utilizado não encontrado."]);
            }
            else {
                $user->update(['name' => $utilizador->name, 'email' => $utilizador->email, 'role_id' => $utilizador->role_id]);
            }


            DB::commit();
            return response()->json(["data" =>$utilizador->toArray(),"message" => "Utilizador actualizado com sucesso."]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json($e);
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
        $utilizador = Utilizador::find($id);

        if (empty($utilizador)) {
            return response()->json(["message" => "Utilizador não encontrado."]);  
        }

        DB::beginTransaction();
        try {

            /** @var User $user belongs to utilizador being updated*/
            $user = $this->user->find($utilizador->user_id);

            if (empty($user)) {
                DB::rollback();
                // return $this->sendError('User of Utilizador Empresa not found');
                return response()->json(["message" => "User of Utilizador Empresa not found"]);  
            }

            $utilizador->delete();
            $user->delete();
            DB::commit();
            // return $this->sendSuccess('Utilizador Empresa deleted successfully');
            return response()->json(["message" => "Utilizador deletado com sucesso."]);  
        } catch (Exception $e) {
            DB::rollback();
            return response()->json($e);
        }
    }
}

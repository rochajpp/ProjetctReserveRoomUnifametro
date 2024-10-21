class BaseModel{
    constructor(table, context){
        this._table = table;
        this._context = context;
    }

    async getAll(){      
        try{
            const [rows] = await this._context.query("SELECT * FROM " + this._table);
            return rows;
        } catch(err){
            console.error("Error getting data: " + err.message);
            return null;
        }
    }

    async getById(Id){
        try{
            const [rows] = await this._context.query("SELECT * FROM " + this._table + " WHERE Id = " + Id);
            return rows;
        } catch(err){
            console.error("Error getting data: " + err);
            return null;
        }
    }

    async insert(model){
        try{
            const[result] = await this._context.query("INSERT INTO " + this._table + " SET ?", model);
            return result;
        } catch(err){
            console.error("Error when entering data: ", err);
            return null;
        }
    }

    async update(model){
        try{
            const [result] = await this._context.query("UPDATE " + this._table + " SET ?", model);
            return result;
        } catch(err){
            console.error("Error when updating data: " + err.message);
            return null;
        }
    }

    async removeById(modelId){
        try{
            const [result] = await this._context.query("DELETE FROM " + this._table + " WHERE Id = " + modelId);
            return result;
        }catch(err){
            console.error("Error removing data: " + err);
            return null;
        }
    }

}

module.exports = () => {
    return BaseModel;
};

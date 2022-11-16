const mongoose = require ('mongoose');
const ObjectId =mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({
    title :{
        type :String,
        required : true ,
        trim :trim
    },
    body :{
        type : String,
        required : true ,
        trim : true
    },
    authorId :{
        type : ObjectId,
        required : true,
        ref : "author"
        
    },
    tags :[],
    category :{
        type: String,
        required: true,
        trim : true
    },
    subcategory :[],
    isDeleted :{
        type : Boolean,
        default :false
    },
    deletedAt :{
        type : date,

    },
    isPublished :{
        type : Boolean,
        default : false

    },
     PublishedAt:{
        type : date
     },

           
},{timestamps : true });

module.exports = mongoose.model('blog',blogSchema)
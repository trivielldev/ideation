Ideas = new Mongo.Collection("ideas");


var Schemas = {};

Schemas.Idea = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    lastUpdated: {
        type: Date,
        label: "Last date this idea was updated",
        optional: true
    },
    description: {
        type: String,
        label: "Description of the idea",
        optional: true
    }
});

Ideas.attachSchema(Schemas.Idea);
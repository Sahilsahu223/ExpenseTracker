package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)
type Entry struct {
	ID          primitive.ObjectID `bson:"id"`
	Amount         *float64        `json:"amount"` 
	Purpose        *float64        `json:"Purpose"`  
	Reason         *string         `json:"Reason"`
}
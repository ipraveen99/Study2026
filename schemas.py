
from pydantic import BaseModel


class Item(BaseModel):
    id: int
    name: str
    description: str | None


class ItemCreate(BaseModel):
    name: str
    description: str | None


class ItemUpdate(BaseModel):
    name: str | None
    description: str | None
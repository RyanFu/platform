# -*- coding: utf-8 -*-

from flask import Blueprint


api_v1 = Blueprint('api_v1', __name__)

from app.apis.v1 import resources
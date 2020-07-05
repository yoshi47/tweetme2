from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render

from .models import Tweet
import random

# Create your views here.
def home_view(request, *args, **kwargs):
    # return HttpResponse("<h1>Hello World</h1>")
    return render(request, "pages/home.html", context={}, status=200)


def tweet_list_view(request, *args, **kwargs):
    """
    REST API VIEW
    Consume by JavaScript or Swift/Java/iOS/Android
    return json data
    """
    qs = Tweet.objects.all()
    tweet_list = [{"id": x.id, "content": x.content, "likes": random.randint(0, 123)} for x in qs]
    data = {
        "isuser": False,
        "response": tweet_list
    }
    return JsonResponse(data)


def tweet_detail_view(request, tweet_id, *args, **kwargs):
    """
    REST API VIEW
    Consume by JavaScript or Swift/Java/iOS/Android
    return json data
    """
    data = {
        "id": tweet_id,
        # "image_path": obj.image.url
    }

    try:
        obj = Tweet.objects.get(id=tweet_id)
        data['content'] = obj.content
    except:
        data['message'] = "Not found"
        status = 404

    return JsonResponse(data, status=status)  # json.dumps

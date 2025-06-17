from django.http import JsonResponse
from posts.models import Post

def post_list_view(request):
    posts = Post.objects.select_related('author').all()
    data = [
        {
            'id': post.id,
            'author': {
                'id': post.author.id,
                'company_id': post.author.company_id,
                'username': post.author.username,
                'first_name': post.author.first_name,
                'last_name': post.author.last_name,
                'position': post.author.position,
                'region': post.author.region,
                'origin': post.author.origin,
                'profile_picture': post.author.profile_picture.url if post.author.profile_picture else None,
            },
            'text': post.text,
            'image': post.image.url if post.image else None,
            'created': post.created.isoformat(),
            'comments': [],  # ide később a kommenteket is be lehet tenni
            'reactions': {}, # ha van ilyen meződ
        }
        for post in posts
    ]
    return JsonResponse(data, safe=False)